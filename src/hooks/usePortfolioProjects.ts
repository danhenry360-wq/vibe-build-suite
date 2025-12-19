import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

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

export function usePortfolioProjects(featuredOnly = false) {
  return useQuery({
    queryKey: ["portfolio-projects", featuredOnly],
    queryFn: async () => {
      let query = supabase
        .from("portfolio_projects")
        .select("*")
        .order("display_order");
      
      if (featuredOnly) {
        query = query.eq("is_featured", true);
      }
      
      const { data, error } = await query;
      
      if (error) throw error;
      return data as PortfolioProject[];
    },
  });
}
