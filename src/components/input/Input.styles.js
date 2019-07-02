import styled from 'styled-components'

export const styles = (theme) => ({
    cancelButton: {
        color: 'white'
    }
});

export const InputContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid var(--border-color, rgba(255, 255, 255, 0.12));   

    input::-webkit-calendar-picker-indicator {
        display: none;
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    background: transparent;
    border: 0;
    padding: var(--padding, 20px);
    font: var(--font-size, 12px) var(--font-familty, Arial, Helvetica, sans-serif);
    color: var(--text-color, white);

    &:focus {
        outline: 0;
    }

    ::placeholder {
        color: var(--text-color, white);
    }
`;