
import { SelectChangeEvent } from "@mui/material";
import { SetStateAction, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Api } from "../API";
import { IPostProducts } from "../Types";
import { useParams } from "react-router";

const fileTypes = ["JPG", "PNG", "GIF"];

type Params = {
    id?: string | undefined
}

export function useProducts() {
    const { id } = useParams<Params>();
    const canEdit = Boolean(id);
    const productId = id?.split('?')[0];
    const [file, setFile] = useState('');
    const [category, setCategory] = useState<string | number>('');
    const [valuesRequire, setValuesRequire] = useState<{ [key: string]: string }>();
    const title = canEdit ? 'Editar' : 'Cadastrar';

    const [fields, setFields] = useState<IPostProducts>({
        title: '',
        price: 0,
        description: '',
        categoryId: 0,
        images: [''],
    });

    const { data: dataProductId, isLoading: isLoadingProductId, isError: isErrorProductId } = useQuery(['get-product-id', id], () => Api.getProductById(Number(id)), {
        staleTime: 1000 * 60 * 60
    });

    const { mutate: createProduct, isLoading: isLoadingCreate } = useMutation(
        'createNewProdutc',
        (body: IPostProducts) => {
            return Api.postProducts(body);
        },
        {
            onSuccess: () => {
                setTimeout(() => {
                    console.log('producto adicionado');
                }, 1000)
            },
            onError: () => {
                setTimeout(() => {
                    console.log('houve um erro');
                }, 1000)
            }
        }
    )

    const { mutate: updateProduct, isLoading: isLoadingUpdate } = useMutation(
        'updateProdutc',
        (body: IPostProducts) => {
            return Api.putProducts(Number(productId), body);
        },
        {
            onSuccess: () => {
                setTimeout(() => {
                    console.log('producto adicionado');
                }, 1000)
            },
            onError: () => {
                setTimeout(() => {
                    console.log('houve um erro');
                }, 1000)
            }
        }
    )


    const handleChangeTextFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        //let newValue;
        //name === 'price' ? newValue = value.replace(/[^0-9]/g, '') : newValue = value;
        setFields({ ...fields, [name]: value })
        setValuesRequire({ ...valuesRequire, [name]: '' });
        console.log(fields)
    }

    const handleFile = (file: { name: string }) => {
        setFile(file?.name);
        setFields({ ...fields, images: [file.name] });
    };

    const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
        setFields({ ...fields, categoryId: category });

    };

    const handleSubmitProduct = () => {
        if (valuesRequire?.title !== undefined && valuesRequire?.price !== undefined && valuesRequire?.description !== undefined) {
            const payLoad: IPostProducts = {
                title: fields.title,
                price: Number(fields.price),
                description: fields.description,
                categoryId: fields.categoryId,
                images: fields.images

            }
            canEdit ? updateProduct(payLoad) : createProduct(payLoad);
        }
    }

    return {
        fileTypes,
        category,
        isLoadingCreate,
        valuesRequire,
        dataProductId,
        title,
        canEdit,
        createProduct,
        handleFile,
        handleChangeCategory,
        handleSubmitProduct,
        handleChangeTextFields
    };
}