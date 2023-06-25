import Link from "next/link"
import GhPart from "./GhPart"

export default function Sidebar() {
  return (
    <div className="sidebar" >
        <Link href='/'className=" side-link">Scenes</Link>
        <Link href='/brows' className=" side-link">Browse novels</Link>
        <Link href='/gallery' className=" side-link">Gallery</Link>
        
        
        
        <div className="gh-cont">
            <GhPart text="Frontend"/>
            <GhPart text="Backend"/>
        </div>
    
    </div>
  )
}
