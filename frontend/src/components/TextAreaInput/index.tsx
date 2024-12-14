
export default function TextAreaInput(props: any) {

    const { validation, invalid = "false", dirty = "false", onTurnDirty, ...inputProps } = props;

    function handleBlur() {
        onTurnDirty(props.name);
    }

    return (
        <textarea
            {...inputProps}
            onBlur={handleBlur}
            data-invalid={invalid}
            data-dirty={dirty}
        />
    );
}