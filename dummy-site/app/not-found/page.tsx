export const dynamic = "force-dynamic";
import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/account");
  return <div></div>;
}