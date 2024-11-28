import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { FileUploader } from "react-drag-drop-files";
import { useCategories, useProducts } from './Hooks';


export default function FormProducts() {
    const { fileTypes, category, handleFile, handleChangeCategory, handleSubmitProduct, handleChangeTextFields } = useProducts();
    const { dataCategories, isLoadingCategory, isErrorCateory } = useCategories();

    if (isErrorCateory) {
        return <Box>Ops! Houve um erro ao carregar as categorias Atualize a página e tente novamente!</Box>
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '60%' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Nome do Produto" variant="outlined" name="title" onChange={handleChangeTextFields} />
                <TextField id="outlined-basic" label="Preco" variant="outlined" name="price" onChange={handleChangeTextFields} />
                <Typography
                    variant="body1"
                    id="tableTitle"
                    component="div"
                >
                    Imagem do Produto
                </Typography><FileUploader handleChange={handleFile} onChange={handleChangeTextFields} name="file" types={fileTypes && fileTypes} />
                {
                    isLoadingCategory ? (
                        <Typography
                            variant="body2"
                            id="tableTitle"
                            component="div"
                            padding={1}
                        >
                            Carregando as categorias...
                        </Typography>
                    ) : (
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category && category}
                                label="Age"
                                name="categoryId"
                                onChange={handleChangeCategory}
                            >
                                {
                                    dataCategories?.data.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
                                    ))
                                }

                            </Select>
                        </FormControl>
                    )
                }

                <TextField id="outlined-textarea" label="Descrição" name="description" variant="outlined" onChange={handleChangeTextFields} multiline />

                <Button
                    variant='contained'
                    onClick={handleSubmitProduct}
                    sx={{ height: '30px', width: 'auto', padding: '10px', alignItems: 'center' }}>
                    Cadastrar Produto
                </Button>

            </Box>
        </Box>
    );
}
