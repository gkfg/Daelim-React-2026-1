export default function Items({name, isPacked}){
    let itemContent = name;
    if(isPacked){
        itemContent = <del>{name + "✅"}</del>;
    }else{
        itemContent += "❌";
    }
    return <li className="item">{itemContent}</li>;
}