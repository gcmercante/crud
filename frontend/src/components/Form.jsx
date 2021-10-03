export function Form(props) {
    return (
        <form {...props}>
            { props.children }
            <button type="submit">{ props.submitbutton }</button>
        </form>
    )
}