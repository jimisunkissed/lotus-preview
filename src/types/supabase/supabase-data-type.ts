export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      channel: {
        Row: {
          created_at: string
          id: number
          image_banner: string | null
          image_profile: string | null
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          image_banner?: string | null
          image_profile?: string | null
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          image_banner?: string | null
          image_profile?: string | null
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      picture: {
        Row: {
          cast: string[] | null
          channel_id: number | null
          created_at: string | null
          director: string
          id: number
          image_banner: string | null
          image_thumbnail: string
          release_date: string | null
          slug: string
          synopsis: string | null
          title: string
          type: Database["public"]["Enums"]["picture_type"]
          updated_at: string | null
          writer: string | null
        }
        Insert: {
          cast?: string[] | null
          channel_id?: number | null
          created_at?: string | null
          director: string
          id?: number
          image_banner?: string | null
          image_thumbnail: string
          release_date?: string | null
          slug: string
          synopsis?: string | null
          title: string
          type: Database["public"]["Enums"]["picture_type"]
          updated_at?: string | null
          writer?: string | null
        }
        Update: {
          cast?: string[] | null
          channel_id?: number | null
          created_at?: string | null
          director?: string
          id?: number
          image_banner?: string | null
          image_thumbnail?: string
          release_date?: string | null
          slug?: string
          synopsis?: string | null
          title?: string
          type?: Database["public"]["Enums"]["picture_type"]
          updated_at?: string | null
          writer?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "picture_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "channel"
            referencedColumns: ["id"]
          },
        ]
      }
      picture_season: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          picture_id: number
          season_number: number
          title: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          picture_id: number
          season_number: number
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          picture_id?: number
          season_number?: number
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "picture_season_picture_id_fkey"
            columns: ["picture_id"]
            isOneToOne: false
            referencedRelation: "picture"
            referencedColumns: ["id"]
          },
        ]
      }
      picture_stream: {
        Row: {
          access_level: Database["public"]["Enums"]["picture_stream_access_level"]
          age_classification: string | null
          asset_id: string | null
          category: Database["public"]["Enums"]["picture_stream_category"]
          created_at: string | null
          description: string | null
          duration: number | null
          episode_number: number | null
          id: string
          language: string[] | null
          picture_id: number
          playback_id: string | null
          quality: string[] | null
          season_id: number | null
          storage_provider: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          access_level: Database["public"]["Enums"]["picture_stream_access_level"]
          age_classification?: string | null
          asset_id?: string | null
          category: Database["public"]["Enums"]["picture_stream_category"]
          created_at?: string | null
          description?: string | null
          duration?: number | null
          episode_number?: number | null
          id?: string
          language?: string[] | null
          picture_id: number
          playback_id?: string | null
          quality?: string[] | null
          season_id?: number | null
          storage_provider?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          access_level?: Database["public"]["Enums"]["picture_stream_access_level"]
          age_classification?: string | null
          asset_id?: string | null
          category?: Database["public"]["Enums"]["picture_stream_category"]
          created_at?: string | null
          description?: string | null
          duration?: number | null
          episode_number?: number | null
          id?: string
          language?: string[] | null
          picture_id?: number
          playback_id?: string | null
          quality?: string[] | null
          season_id?: number | null
          storage_provider?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "picture_stream_picture_id_fkey"
            columns: ["picture_id"]
            isOneToOne: false
            referencedRelation: "picture"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "picture_stream_season_id_fkey"
            columns: ["season_id"]
            isOneToOne: false
            referencedRelation: "picture_season"
            referencedColumns: ["id"]
          },
        ]
      }
      rent_access: {
        Row: {
          created_at: string
          id: string
          picture_id: number | null
          rent_expires_at: string | null
          rent_order_id: string | null
          rented_at: string | null
          stream_id: string | null
          updated_at: string | null
          user_id: string | null
          view_expires_at: string | null
          viewed_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          picture_id?: number | null
          rent_expires_at?: string | null
          rent_order_id?: string | null
          rented_at?: string | null
          stream_id?: string | null
          updated_at?: string | null
          user_id?: string | null
          view_expires_at?: string | null
          viewed_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          picture_id?: number | null
          rent_expires_at?: string | null
          rent_order_id?: string | null
          rented_at?: string | null
          stream_id?: string | null
          updated_at?: string | null
          user_id?: string | null
          view_expires_at?: string | null
          viewed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rent_access_picture_id_fkey"
            columns: ["picture_id"]
            isOneToOne: false
            referencedRelation: "picture"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rent_access_rent_order_id_fkey"
            columns: ["rent_order_id"]
            isOneToOne: false
            referencedRelation: "rent_order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rent_access_stream_id_fkey"
            columns: ["stream_id"]
            isOneToOne: false
            referencedRelation: "picture_stream"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rent_access_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      rent_order: {
        Row: {
          created_at: string | null
          id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rent_order_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      user: {
        Row: {
          country: string | null
          created_at: string | null
          date_of_birth: string | null
          dial_code: string | null
          email: string
          first_name: string | null
          gender: string | null
          id: string
          last_name: string | null
          phone_number: string | null
          updated_at: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          dial_code?: string | null
          email: string
          first_name?: string | null
          gender?: string | null
          id?: string
          last_name?: string | null
          phone_number?: string | null
          updated_at?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          dial_code?: string | null
          email?: string
          first_name?: string | null
          gender?: string | null
          id?: string
          last_name?: string | null
          phone_number?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_pictures: {
        Args: {
          channel_id?: number
          type?: Database["public"]["Enums"]["picture_type"]
          status?: string
          sortby?: string
          direction?: string
          page?: number
          length?: number
        }
        Returns: {
          cast: string[] | null
          channel_id: number | null
          created_at: string | null
          director: string
          id: number
          image_banner: string | null
          image_thumbnail: string
          release_date: string | null
          slug: string
          synopsis: string | null
          title: string
          type: Database["public"]["Enums"]["picture_type"]
          updated_at: string | null
          writer: string | null
        }[]
      }
      validate_signup_email: {
        Args: { user_email: string }
        Returns: Database["public"]["CompositeTypes"]["email_validation_result"]
      }
    }
    Enums: {
      picture_stream_access_level: "free" | "premium" | "subscription"
      picture_stream_category:
        | "main_content"
        | "trailer"
        | "teaser"
        | "behind_the_scenes"
        | "interviews"
        | "deleted_scenes"
        | "recap"
        | "preview"
      picture_type: "film" | "series" | "documentary"
    }
    CompositeTypes: {
      email_validation_result: {
        is_unique: boolean | null
        existing_count: number | null
        cleaned_email: string | null
      }
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      picture_stream_access_level: ["free", "premium", "subscription"],
      picture_stream_category: [
        "main_content",
        "trailer",
        "teaser",
        "behind_the_scenes",
        "interviews",
        "deleted_scenes",
        "recap",
        "preview",
      ],
      picture_type: ["film", "series", "documentary"],
    },
  },
} as const
