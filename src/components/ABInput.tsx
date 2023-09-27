import { Button, TextField } from "@mui/material";


type propsType = {
    label: string
    type?: string
    onChange?: any
    value?: any
    disabled?: boolean,
}

export default function ABInput(props: propsType) {
    const { disabled, label, type, onChange, value } = props
    return (
        <div>
            <TextField id="outlined-basic" disabled={disabled} label={label} variant="outlined" type={type ?? "text"} onChange={onChange} value={value} />

        </div>
    )
}
