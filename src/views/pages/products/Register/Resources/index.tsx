import { Autocomplete, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { FileUploader } from "react-drag-drop-files";
import { useCategories, useProducts } from './Hooks';
import { IDataCategories } from './Types';

export default function FormProducts() {
    const { fileTypes, valuesRequire, dataProductId, canEdit, handleFile, handleChangeCategory, handleSubmitProduct, handleChangeTextFields } = useProducts();
    const { dataCategories, isLoadingCategory, isErrorCateory } = useCategories();

    if (isErrorCateory) {
        return <Box>Ops! Houve um erro ao carregar as categorias Atualize a página e tente novamente!</Box>
    }

    const nameCategory = dataCategories?.data.map((item) => item.name);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box padding={'0'} display={'flex'} justifyContent={'space-between'}>
                <Typography
                    sx={{ padding: '10px' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    {canEdit ? 'Editar Produto' : 'Cadastrar Produto'}
                </Typography>
            </Box>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '60%' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Nome do Produto" variant="outlined" required name="title" focused={canEdit} value={dataProductId?.data.title} helperText={valuesRequire?.title} error={valuesRequire && Boolean(valuesRequire?.title) && Boolean(valuesRequire?.title !== '')} onChange={handleChangeTextFields} />
                <TextField id="outlined-basic" label="Preco" variant="outlined" name="price" focused={canEdit} required value={dataProductId?.data.price} error={valuesRequire && Boolean(valuesRequire?.price) && Boolean(valuesRequire?.price !== '')} onChange={handleChangeTextFields}
                    inputProps={{
                        inputMode: 'numeric', // Sugerir ao navegador que deve ser numérico (para dispositivos móveis)
                        pattern: '[0-9]*', // Garante que apenas números sejam aceitos em dispositivos móveis
                    }} />
                <Typography
                    variant="body1"
                    id="tableTitle"
                    component="div"
                >
                    Imagem do Produto
                </Typography><FileUploader handleChange={handleFile} onChange={handleChangeTextFields} value={dataProductId?.data.images[0]} name="file" types={fileTypes && fileTypes} />
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

                        <Autocomplete
                            disablePortal
                            sx={{ width: 300, paddingTop: 2 }}
                            options={(nameCategory as unknown as IDataCategories[]) || []}
                            value={dataProductId?.data.category.name}
                            renderInput={(params) => <TextField {...params} onChange={handleChangeCategory} label="Categorias" />} />
                    )
                }
                <TextField id="outlined-textarea" label="Descrição" name="description" variant="outlined" focused={canEdit} required value={dataProductId && dataProductId?.data.description} error={valuesRequire && Boolean(valuesRequire?.description) && Boolean(valuesRequire?.description !== '')} onChange={handleChangeTextFields} multiline />
                <Button
                    variant='contained'
                    onClick={() => handleSubmitProduct()}
                    sx={{ height: '30px', width: 'auto', padding: '10px', alignItems: 'center' }}>
                    {canEdit ? 'Editar Produto' : 'Cadastrar Produto'}
                </Button>

            </Box>
        </Box>
    );
}
