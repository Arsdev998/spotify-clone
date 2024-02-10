import { Subscription, userDetails } from "@/type";
import { User } from "@supabase/auth-helpers-nextjs";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { createContext, useState } from "react";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: userDetails;
  isLoading: boolean;
  subscription: Subscription | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();
  const user = useSupaUser();

  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<userDetails | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null)
};
