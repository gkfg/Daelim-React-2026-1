import reactRogo from '../assets/react.svg'

export default function ChildComp({imageInfo, width, height}){
    return(
        <>
            <img src={imageInfo.src} alt={imageInfo.alt} width={width} height={height} />
        </>
    )
}