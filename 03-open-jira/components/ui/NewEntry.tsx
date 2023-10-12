import { ChangeEvent, useContext, useState } from "react";

import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

export const NewEntry = () => {
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);
  const { addNewEntry } = useContext(EntriesContext);
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setTouched(true);
  };

  const onSave = () => {
    if (!inputValue.length) return;
    addNewEntry(inputValue);
    setInputValue("");
    setTouched(false);
    setIsAddingEntry(false);
  };

  const onCancel = () => {
    setIsAddingEntry(false);
    setTouched(false);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText="Ingrese un valor"
            value={inputValue}
            error={touched && !inputValue.length}
            onChange={onTextFieldChange}
            onBlur={() => setTouched(true)}
          />

          <Box display="flex" justifyContent="space-between">
            <Button color="primary" onClick={onCancel}>
              Cancelar
            </Button>
            <Button variant="outlined" color="secondary" endIcon={<SaveIcon />} onClick={onSave}>
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};
