import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="p-2 pt-4 w-[100vw]">
      <div
        className="flex gap-60 py-4 w-fit rounded-sm mx-auto px-10"
      >
        <div>
          <h2 className="text-2xl font-bold">Ankit Kumar</h2>
        </div>
        <div>
          <ul className="flex gap-12">
            <li>
              <Link className="text-xl font-medium" href={"#"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-xl font-medium" href={"#"}>
                Projects
              </Link>
            </li>
            <li>
              <Link className="text-xl font-medium" href={"#"}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <Link href={"#"}>
                <Image
                  src={"/assets/social-media-icons/linkedin_icon.png"}
                  alt="linkedin"
                  height={35}
                  width={35}
                />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Image
                  src={"/assets/social-media-icons/github_icon.png"}
                  alt="github"
                  height={35}
                  width={35}
                />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Image
                  src={"/assets/social-media-icons/instagram_icon.png"}
                  alt="instagram"
                  height={35}
                  width={35}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
