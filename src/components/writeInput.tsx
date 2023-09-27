interface inputProps {
    type?: string;
    label: string;
    value?: string;
    disabled?: boolean;
    onChange?: any;
    onClick?: any;
}

export default function WriteInput(props: inputProps) {
    const { type, label, onChange, disabled, onClick, value } = props;

    return (
        <>
            <input type={type} placeholder={label} disabled={disabled} onChange={onChange} onClick={onClick} value={value} />
        </>
    );
}