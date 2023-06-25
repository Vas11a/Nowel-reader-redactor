import gh from '../../publick/ghub.png'
import Image from 'next/image'


type GhPartType = {
    text: string;
    url?: string
}

export default function GhPart({ text, url = '' }:GhPartType) {
    return (
        <div className="gh-one">
            <div className=" font-bold text-lg text-center">
                {text}
            </div>
            <Image  src={gh} width={40} height={40} alt="github" />
        </div>
    )
}
