import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Upload, LogOut, Loader2 } from "lucide-react";

interface PortfolioProject {
  id: string;
  title: string;
  description: string | null;
  category: string;
  tags: string[];
  image_url: string | null;
  video_url: string | null;
  stats_timeline: string | null;
  stats_improvement: string | null;
  is_featured: boolean;
  display_order: number;
}

interface SiteStat {
  id: string;
  stat_key: string;
  stat_value: string;
  stat_label: string;
  display_order: number;
}

export default function Admin() {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [stats, setStats] = useState<SiteStat[]>([]);
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  const [isStatDialogOpen, setIsStatDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);
  const [editingStat, setEditingStat] = useState<SiteStat | null>(null);
  const [uploading, setUploading] = useState(false);

  // Project form state
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    category: "website",
    tags: "",
    stats_timeline: "",
    stats_improvement: "",
    is_featured: false,
  });
  const [projectImage, setProjectImage] = useState<File | null>(null);
  const [projectVideo, setProjectVideo] = useState<File | null>(null);

  // Stat form state
  const [statForm, setStatForm] = useState({
    stat_key: "",
    stat_value: "",
    stat_label: "",
    display_order: 0,
  });

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin-login");
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchProjects();
      fetchStats();
    }
  }, [user, isAdmin]);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("portfolio_projects")
      .select("*")
      .order("display_order");
    
    if (error) {
      toast({ title: "Error fetching projects", description: error.message, variant: "destructive" });
    } else {
      setProjects(data || []);
    }
  };

  const fetchStats = async () => {
    const { data, error } = await supabase
      .from("site_stats")
      .select("*")
      .order("display_order");
    
    if (error) {
      toast({ title: "Error fetching stats", description: error.message, variant: "destructive" });
    } else {
      setStats(data || []);
    }
  };

  const uploadFile = async (file: File, folder: string): Promise<string | null> => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${folder}/${Date.now()}.${fileExt}`;
    
    const { error } = await supabase.storage
      .from("portfolio-media")
      .upload(fileName, file);
    
    if (error) {
      toast({ title: "Upload failed", description: error.message, variant: "destructive" });
      return null;
    }

    const { data } = supabase.storage
      .from("portfolio-media")
      .getPublicUrl(fileName);
    
    return data.publicUrl;
  };

  const handleSaveProject = async () => {
    setUploading(true);

    let image_url = editingProject?.image_url || null;
    let video_url = editingProject?.video_url || null;

    if (projectImage) {
      image_url = await uploadFile(projectImage, "images");
    }
    if (projectVideo) {
      video_url = await uploadFile(projectVideo, "videos");
    }

    const projectData = {
      title: projectForm.title,
      description: projectForm.description || null,
      category: projectForm.category,
      tags: projectForm.tags.split(",").map(t => t.trim()).filter(Boolean),
      stats_timeline: projectForm.stats_timeline || null,
      stats_improvement: projectForm.stats_improvement || null,
      is_featured: projectForm.is_featured,
      image_url,
      video_url,
    };

    if (editingProject) {
      const { error } = await supabase
        .from("portfolio_projects")
        .update(projectData)
        .eq("id", editingProject.id);
      
      if (error) {
        toast({ title: "Update failed", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Project updated!" });
        fetchProjects();
      }
    } else {
      const { error } = await supabase
        .from("portfolio_projects")
        .insert(projectData);
      
      if (error) {
        toast({ title: "Create failed", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Project created!" });
        fetchProjects();
      }
    }

    setUploading(false);
    setIsProjectDialogOpen(false);
    resetProjectForm();
  };

  const handleDeleteProject = async (id: string) => {
    const { error } = await supabase
      .from("portfolio_projects")
      .delete()
      .eq("id", id);
    
    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Project deleted" });
      fetchProjects();
    }
  };

  const handleSaveStat = async () => {
    if (editingStat) {
      const { error } = await supabase
        .from("site_stats")
        .update(statForm)
        .eq("id", editingStat.id);
      
      if (error) {
        toast({ title: "Update failed", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Stat updated!" });
        fetchStats();
      }
    } else {
      const { error } = await supabase
        .from("site_stats")
        .insert(statForm);
      
      if (error) {
        toast({ title: "Create failed", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Stat created!" });
        fetchStats();
      }
    }

    setIsStatDialogOpen(false);
    resetStatForm();
  };

  const handleDeleteStat = async (id: string) => {
    const { error } = await supabase
      .from("site_stats")
      .delete()
      .eq("id", id);
    
    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Stat deleted" });
      fetchStats();
    }
  };

  const openEditProject = (project: PortfolioProject) => {
    setEditingProject(project);
    setProjectForm({
      title: project.title,
      description: project.description || "",
      category: project.category,
      tags: project.tags.join(", "),
      stats_timeline: project.stats_timeline || "",
      stats_improvement: project.stats_improvement || "",
      is_featured: project.is_featured,
    });
    setIsProjectDialogOpen(true);
  };

  const openEditStat = (stat: SiteStat) => {
    setEditingStat(stat);
    setStatForm({
      stat_key: stat.stat_key,
      stat_value: stat.stat_value,
      stat_label: stat.stat_label,
      display_order: stat.display_order,
    });
    setIsStatDialogOpen(true);
  };

  const resetProjectForm = () => {
    setEditingProject(null);
    setProjectForm({
      title: "",
      description: "",
      category: "website",
      tags: "",
      stats_timeline: "",
      stats_improvement: "",
      is_featured: false,
    });
    setProjectImage(null);
    setProjectVideo(null);
  };

  const resetStatForm = () => {
    setEditingStat(null);
    setStatForm({
      stat_key: "",
      stat_value: "",
      stat_label: "",
      display_order: 0,
    });
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          </div>

          <Tabs defaultValue="projects" className="space-y-6">
            <TabsList className="glass">
              <TabsTrigger value="projects">Portfolio Projects</TabsTrigger>
              <TabsTrigger value="stats">Site Stats</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-foreground">Projects</h2>
                <Dialog open={isProjectDialogOpen} onOpenChange={(open) => {
                  setIsProjectDialogOpen(open);
                  if (!open) resetProjectForm();
                }}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-primary text-primary-foreground">
                      <Plus className="mr-2 h-4 w-4" /> Add Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>
                        {editingProject ? "Edit Project" : "Add New Project"}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={projectForm.title}
                          onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={projectForm.description}
                          onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                          className="bg-background/50"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Input
                            id="category"
                            value={projectForm.category}
                            onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                            className="bg-background/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="tags">Tags (comma-separated)</Label>
                          <Input
                            id="tags"
                            value={projectForm.tags}
                            onChange={(e) => setProjectForm({ ...projectForm, tags: e.target.value })}
                            className="bg-background/50"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Timeline (e.g., "2 weeks")</Label>
                          <Input
                            id="timeline"
                            value={projectForm.stats_timeline}
                            onChange={(e) => setProjectForm({ ...projectForm, stats_timeline: e.target.value })}
                            className="bg-background/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="improvement">Result (e.g., "+40% sales")</Label>
                          <Input
                            id="improvement"
                            value={projectForm.stats_improvement}
                            onChange={(e) => setProjectForm({ ...projectForm, stats_improvement: e.target.value })}
                            className="bg-background/50"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="image">Project Image</Label>
                        <Input
                          id="image"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setProjectImage(e.target.files?.[0] || null)}
                          className="bg-background/50"
                        />
                        {editingProject?.image_url && (
                          <p className="text-xs text-muted-foreground">
                            Current: {editingProject.image_url.split("/").pop()}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="video">Project Video (optional)</Label>
                        <Input
                          id="video"
                          type="file"
                          accept="video/*"
                          onChange={(e) => setProjectVideo(e.target.files?.[0] || null)}
                          className="bg-background/50"
                        />
                        {editingProject?.video_url && (
                          <p className="text-xs text-muted-foreground">
                            Current: {editingProject.video_url.split("/").pop()}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="featured"
                          checked={projectForm.is_featured}
                          onChange={(e) => setProjectForm({ ...projectForm, is_featured: e.target.checked })}
                        />
                        <Label htmlFor="featured">Featured on homepage</Label>
                      </div>
                      <Button 
                        onClick={handleSaveProject} 
                        className="w-full bg-gradient-primary text-primary-foreground"
                        disabled={uploading}
                      >
                        {uploading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {projectImage || projectVideo ? "Uploading..." : "Saving..."}
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            {editingProject ? "Update Project" : "Create Project"}
                          </>
                        )}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="glass rounded-xl overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Featured</TableHead>
                      <TableHead>Media</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.title}</TableCell>
                        <TableCell>{project.category}</TableCell>
                        <TableCell>{project.is_featured ? "Yes" : "No"}</TableCell>
                        <TableCell>
                          {project.image_url && "📷"}
                          {project.video_url && "🎥"}
                          {!project.image_url && !project.video_url && "-"}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openEditProject(project)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteProject(project.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {projects.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                          No projects yet. Add your first project!
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="stats" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-foreground">Homepage Stats</h2>
                <Dialog open={isStatDialogOpen} onOpenChange={(open) => {
                  setIsStatDialogOpen(open);
                  if (!open) resetStatForm();
                }}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-primary text-primary-foreground">
                      <Plus className="mr-2 h-4 w-4" /> Add Stat
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        {editingStat ? "Edit Stat" : "Add New Stat"}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="stat_key">Key (unique identifier)</Label>
                        <Input
                          id="stat_key"
                          value={statForm.stat_key}
                          onChange={(e) => setStatForm({ ...statForm, stat_key: e.target.value })}
                          placeholder="e.g., projects_count"
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="stat_value">Value</Label>
                        <Input
                          id="stat_value"
                          value={statForm.stat_value}
                          onChange={(e) => setStatForm({ ...statForm, stat_value: e.target.value })}
                          placeholder="e.g., 50+"
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="stat_label">Label</Label>
                        <Input
                          id="stat_label"
                          value={statForm.stat_label}
                          onChange={(e) => setStatForm({ ...statForm, stat_label: e.target.value })}
                          placeholder="e.g., Projects Delivered"
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="display_order">Display Order</Label>
                        <Input
                          id="display_order"
                          type="number"
                          value={statForm.display_order}
                          onChange={(e) => setStatForm({ ...statForm, display_order: parseInt(e.target.value) || 0 })}
                          className="bg-background/50"
                        />
                      </div>
                      <Button onClick={handleSaveStat} className="w-full bg-gradient-primary text-primary-foreground">
                        {editingStat ? "Update Stat" : "Create Stat"}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="glass rounded-xl overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Key</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Label</TableHead>
                      <TableHead>Order</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {stats.map((stat) => (
                      <TableRow key={stat.id}>
                        <TableCell className="font-mono text-sm">{stat.stat_key}</TableCell>
                        <TableCell className="font-bold text-primary">{stat.stat_value}</TableCell>
                        <TableCell>{stat.stat_label}</TableCell>
                        <TableCell>{stat.display_order}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openEditStat(stat)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteStat(stat.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
