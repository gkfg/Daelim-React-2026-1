export default function Signup1(){
    return(
        <>
            <form onSubmit={() => {
                alert("회원가입 완료");
            }}>
                <input type="text"/>
                <button>send</button>
            </form>
        </>
    )
}
