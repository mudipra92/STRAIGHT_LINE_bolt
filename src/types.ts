export interface Character {
  character_id: number;
  full_name: string;
  alias: string;
  primary_role: string;
  affiliation: string;
  jgsdf_rank: string;
  jgsdf_assignment: string;
  final_status_summary: string;
  future_plans: string;
  image: string;
}

export interface Relationship {
  relationship_id: number;
  character1_id: number;
  character2_id: number;
  relationship_type: string;
  status_description: string;
}

export interface Event {
  event_id: number;
  event_name: string;
  event_date_approx: string;
  location: string;
  description: string;
  key_character_ids: string | number;
}
