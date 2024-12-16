import Image from "next/image"

export default function Images() {
    return (
        <div className="mx-28 lg:mx-[308px]">
            <Image src="/images.png" alt="img" width={600} height={500} className="w-[450px] lg:w-[600px] h-[50px]"/>
        </div>
    )
}