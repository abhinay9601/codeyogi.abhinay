import { State } from "./state";
import { User } from "./User";

export interface Group {
  id:                   number;
  name:                 string;
  is_private:           boolean;
  is_academic:          boolean;
  description:          string;
  introductory_message?: string;
  group_image_url:      string;
  join_code:            string;
  created_at:           Date;
  updated_at:           Date;
  chatCount:            number;
  state:                State;
  creator:             User;
  issues:               any[];
  invitedMembers:       User[];
  participants:         User[];
  advocatePage?:         string;
}