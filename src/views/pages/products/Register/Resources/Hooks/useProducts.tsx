
import { SelectChangeEvent } from "@mui/material";
import { SetStateAction, useState } from "react";
import { useMutation } from "react-query";
import { Api } from "../API";
import { IPostProducts } from "../Types";

const fileTypes = ["JPG", "PNG", "GIF"];

export function useProducts() {
    const [file, setFile] = useState('');
    const [category, setCategory] = useState<string | number>('');

    const [fields, setFields] = useState<IPostProducts>({
        title: '',
        price: 0,
        description: '',
        categoryId: 0,
        images: [''],
    })


    const handleFile = (file: { name: string }) => {
        setFile(file?.name);
        setFields({ ...fields, images: [file.name] });
    };

    const handleChangeCategory = (event: SelectChangeEvent<typeof category>) => {
        setCategory(event.target.value);
        setFields({ ...fields, categoryId: category });

    };

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

    const handleChangeTextFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value })
        console.log(fields)
    }

    const handleSubmitProduct = () => {
        const payLoad: IPostProducts = {
            title: fields.title,
            price: Number(fields.price),
            description: fields.description,
            categoryId: fields.categoryId,
            images: fields.images

        }
        createProduct(payLoad);

        console.log(payLoad)
    }


    return {
        fileTypes,
        category,
        isLoadingCreate,
        createProduct,
        handleFile,
        handleChangeCategory,
        handleSubmitProduct,
        handleChangeTextFields
    };
}