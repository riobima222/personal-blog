import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
  title: "Blog all posts",
  description: "blog page of this blog",
};


export default function BlogLayout ({children} : {children: React.ReactNode})  {
    return (
        <div>
            {children}
        </div>
    )
}