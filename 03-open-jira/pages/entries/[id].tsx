import { ChangeEvent, FC, useContext, useMemo, useState } from "react";
import { GetServerSideProps } from "next";

import { DeleteOutline, SaveOutlined } from "@mui/icons-material";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  capitalize,
  useTheme,
} from "@mui/material";

import { Layout } from "@/components/layouts";
import { Entry, EntryStatus } from "@/interfaces";
import { dbEntries } from "@/database";
import { EntriesContext } from "@/context/entries";
import { dateFunctions } from "@/utils";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

interface Props {
  entry: Entry;
}

export default function EntryPage({ entry }: Props) {
  const { updateEntry } = useContext(EntriesContext);
  const theme = useTheme();
  const [inputValue, setInputValue] = useState(entry.description);
  const [entryStatus, setEntryStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);
  const isNotValid = useMemo(() => !inputValue.length && touched, [inputValue, touched]);

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setTouched(true);
  };

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEntryStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    if (!inputValue.trim().length) return;
    updateEntry(
      {
        ...entry,
        status: entryStatus,
        description: inputValue,
      },
      true
    );
    setTouched(false);
  };

  return (
    <Layout title={inputValue.substring(0, 20).concat("...")}>
      <Grid container justifyContent={"center"} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <CardHeader
            title={`Entrada: ${inputValue}`}
            subheader={`Creada ${dateFunctions
              .getFormatDistanceToNow(entry.createdAt)
              .toLowerCase()}`}
          />
          <CardContent>
            <TextField
              sx={{ marginTop: 2, marginBottom: 1 }}
              fullWidth
              placeholder="Nueva entrada"
              autoFocus
              multiline
              label="Nueva entrada"
              value={inputValue}
              onChange={onTextFieldChange}
              onBlur={() => setTouched(true)}
              helperText={isNotValid && "Ingrese un valor"}
              error={isNotValid}
            />
            <FormControl>
              <FormLabel>Estado:</FormLabel>
              <RadioGroup row value={entryStatus} onChange={onStatusChange}>
                {validStatus.map((opt) => (
                  <FormControlLabel
                    key={opt}
                    label={capitalize(opt)}
                    value={opt}
                    control={<Radio />}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </CardContent>
          <CardActions>
            <Button
              startIcon={<SaveOutlined />}
              variant="contained"
              fullWidth
              onClick={onSave}
              disabled={!inputValue.length}
            >
              Save
            </Button>
          </CardActions>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: `error.${theme.palette.mode}`,
        }}
      >
        <DeleteOutline />
      </IconButton>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await dbEntries.getEntryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { entry },
  };
};
