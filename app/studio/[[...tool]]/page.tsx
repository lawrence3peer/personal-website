import { metadata, viewport } from "next-sanity/studio";
import Studio from "./StudioComponent";

export { metadata, viewport };

export default function StudioPage() {
  return <Studio />;
}
