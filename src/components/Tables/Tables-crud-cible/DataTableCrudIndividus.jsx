
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from 'primereact/checkbox';

import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../../../views/dons/service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import './DataTableCrud.css';
import { TextArea } from 'semantic-ui-react';

const DataTableCrudIndividus = (props) => {
    const navigate = useNavigate()

    let emptyProduct = {
    email: "",
    user_name: "",
    first_name: "",
    password: "",
    adresse: "",
    about_me: "",
    is_active: "",
    is_staff: "",
    is_superuser: "",
    district: null,
    region: null,
    departement: "",
    sous_prefecture: "",
    commune: "",
    milieu_r: "",
    quartier: ""

};

    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const productService = new ProductService();



    useEffect(() => {
        
        productService.getIndividus().then(data =>  setProducts(data));
        
    }, []); 


    const voirDetailsActeurs=()=>{
        navigate(props.detailUrl,{
            state:{
                idActeur:55,
                typeActeur:props.acteursTitle
        }})
    }



    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    }






    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    }


    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
               
            </React.Fragment>
        )
    }

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div  className="d-flex" style={{justifyContent:"space-between",justifyItems:"center"}} >
                    <Button  onClick={exportCSV} className="px-3 p-button-sm p-button-rounded p-button-outlined p-button-raised p-button-help me-5" aria-label="Plus">
                        <i className="pi pi-upload px-2"></i>
                        <span className="px-5">Exporter</span>
                    </Button>
                    <div className=" font-weight-bold" style={{fontWeight:"bold"}} >
                        <p>
                            <span className="me-3" >
                            {products ==null ?'0':products.length }
                            </span>
                            {props.acteursTitle}
                        </p>
                    </div>
                </div>

            </React.Fragment>
        )
    }

    const owner1BodyTemplate = (rowData) => {
        return (rowData.owner1);
    }
    const nomBodyTemplate = (rowData) => {
        return rowData.nom;
    }

    const prenomBodyTemplate = (rowData) => {
        return rowData.prenom;
    }
    const nationaliteTemplate = (rowData) => {
        return rowData.nationalite
  
    }
    const departementTemplate = (rowData) => {
        return rowData.departement;
  
    }
    const numeroTemplate = (rowData) => {
        return rowData.numero;
  
    }
    const sous_prefectureTemplate = (rowData) => {
        return rowData.sous_prefecture
  
    }
    const communeTemplate = (rowData) => {
        return(
   
    rowData.commune 
   
        )
    }
    const lieu_residence_a = (rowData) => {
        return(
      
    rowData.lieu_residence_a
  
        )
  
    }
    const numero_cniTemplate = (rowData) => {
        return(
   
    rowData.numero_cni 
   )
  
    }
  
  

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-eye" className="p-button-rounded p-button-outlined " onClick={() => voirDetailsActeurs()} />
            </React.Fragment>
        );
    }





    return (
        <div className="datatable-crud-demo mt-5">
           <Toast ref={toast} />
                <Toolbar className="mb-4 bg-white border-0" left={leftToolbarTemplate}  right={rightToolbarTemplate}></Toolbar>
            <div className="data-table-container">

                <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Afficher de {first} ?? {last} de {totalRecords} Acteurs"
                    globalFilter={globalFilter}  responsiveLayout="scroll">
                    <Column selectionMode="multiple" headerStyle={{ width: '2rem' }} exportable={false}></Column>
                    <Column field="owner1" header="owner1" body={owner1BodyTemplate}   style={{ minWidth: '5rem' }}></Column>
                    <Column field="nom" header="Nom " body={nomBodyTemplate}   style={{ minWidth: '16rem' }}></Column>
                    <Column field="prenom" header="Prenom" body={prenomBodyTemplate}  style={{ minWidth: '16rem' }}></Column>
                    <Column field="nationalite" header="Nationnalit??" body={nationaliteTemplate}  style={{ minWidth: '15rem' }}></Column>
                    <Column field="numero_cni" header="Numero CNI" body={numero_cniTemplate}  style={{ minWidth: '10rem' }}></Column>
                
                    <Column field="numero" header="numero Tel" body={numeroTemplate}  style={{ minWidth: '15rem' }}></Column>
                    <Column field="commune" header="Commune " body={communeTemplate}  style={{ minWidth: '10rem' }}></Column>
           
                    <Column field="departement" header="Departement" body={departementTemplate}  style={{ minWidth: '10rem' }}></Column>
                    <Column field="sous_prefecture" header="Sous-pr??fecture" body={sous_prefectureTemplate}  style={{ minWidth: '15rem' }}></Column>
                    <Column field="lieu_residence_a" header="Lieu r??sidence actuel " body={lieu_residence_a}  style={{ minWidth: '15rem' }}></Column>
                    
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '1rem' }}></Column>
                </DataTable>
            </div>

     

        </div>
    );
}

export default DataTableCrudIndividus