export default function Signup2(){
    return(
        <>
            <form onSubmit={e => {
                e.preventDefault();
                alert("회원가입 완료");
            }}>
                <input type="text"/>
                <button>send</button>
            </form>
        </>
    )
}