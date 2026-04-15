import OrderUp from './orderUp'
export default function kiosk(){
    return(
        <section>
            <h2>치즈버거 세트 메뉴를 주문하세요.</h2>
            <p>일반 세트: </p>
            <OrderUp order={1}/>
            <p>패밀리 세트: </p>
            <OrderUp order={2}/>
            <p>이용해주셔서 감사합니다</p>
        </section>
    )
}