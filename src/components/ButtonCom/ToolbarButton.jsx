export default function ToolbarButton({ handle, message, children, style }) {

    return (
        <button onClick={ () => handle(message)} className={style}>
            {children}
        </button>
    );
}