/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProfilePageLayout from "../layouts/profileLayout";
import { getUser } from "../utils/userManager";

const ProfilePage = () => {
  const router = useRouter();
  const authenticationCheck = () => {
    const user = getUser();
    if (null == user) {
      router.push("/auth");
    }
  };
  useEffect(() => {
    authenticationCheck();
  }, []);
  return (
    <div className="html">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        />
      </Head>
      <ProfilePageLayout />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></script>
    </div>
  );
};

export default ProfilePage;
