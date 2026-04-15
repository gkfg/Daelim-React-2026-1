import Items from "./Items"

export default function PackingList(){

    return(
        <section>
            <h1>여행 준비 목록</h1>
            <ul>
                <Items name={"여행 짐 리스트"} isPacked={true}/>
                <Items name={"옷"} isPacked={false}/>
                <Items name={"노트북"}/>
            </ul>
        </section>
    )
}