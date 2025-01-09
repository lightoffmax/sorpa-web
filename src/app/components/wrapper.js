export default function Wrapper({content}) {
    return (
        <div className="flex flex-col pt-[100px] px-[60px] min-h-screen overflow-y-auto ">
            {content}
        </div>
    )
}