import { Box, Button, TextField } from '@mui/material';
import React, {
  ChangeEvent,
  HtmlHTMLAttributes,
  useContext,
  useState
} from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
  const [inputValue, setinputValue] = useState('');
  const [touched, setTouched] = useState(false);
  const { addNewEntry } = useContext(EntriesContext);

  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const onTextChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setinputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setinputValue('');
    setTouched(false);
    setIsAddingEntry(false);
  };
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder='Nueva entrada'
            autoFocus
            multiline
            label='Nueva entrada'
            value={inputValue}
            onChange={onTextChanged}
            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
            error={inputValue.length <= 0 && touched}
            onBlur={() => setTouched(true)}
          />
          <Box display='flex' justifyContent='space-between'>
            <Button
              variant='text'
              endIcon={<SaveOutlinedIcon />}
              onClick={() => {
                setIsAddingEntry(false);
                setTouched(false);
                setinputValue('');
              }}
            >
              Cancelar
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Button
            variant='outlined'
            fullWidth
            startIcon={<AddCircleOutlineOutlinedIcon />}
            onClick={() => setIsAddingEntry(true)}
          >
            Agregar Tarea
          </Button>
        </>
      )}
    </Box>
  );
};
