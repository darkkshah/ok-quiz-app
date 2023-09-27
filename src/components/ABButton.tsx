import { Button, TextField } from "@mui/material";


type propstype = {
    label: string
    onClick?: any
    className?: any
}

export default function ABButton(props: propstype) {
    const { label, onClick, className } = props
    return (
        <div>
            <Button className={className} onClick={onClick} variant="contained">{label}</Button>
        </div>
    )
}
