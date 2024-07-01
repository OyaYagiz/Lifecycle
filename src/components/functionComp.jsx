import { useState, useEffect } from "react";

const FunctionComp = () => {
    const [page, setPage ] = useState(1);
    const [name, setName] = useState ('');

    /* *
    
    // 1)) bileşenin ekrana basılma olayını izle //didmount olayı
    useEffect(()=>{
        console.log("bileşenin ekrana basıldı")
    },[]); 

    // 2 )) bileşenin ekrandan gitme olayını izle
    useEffect(() => {

        //bu fonksiyon //unmount anında çalışı
        return() => console.log('Ekrandan Gitti!!!');
    },[]); 
    
    */

    // // 3 )) Hem ekrana gelme hemde ekrandan gştme olayını izle (didmount ve unmount olayı)

    //     useEffect(() => {
    //         //didmount
    //         console.log("Ekrana geldi");
    //         //unmount
    //         return() => console.log('Ekrandan Gitti!!!');
    //     }, []);

    //     // 4 )) Bileşen render olma olayı

    //     useEffect(() =>{
    //         console.log('Bileşen render oldu. State veya prop değişti.');
    //     });

        // 5)) Belirli bir state veya prop'un değişimini izle
        useEffect(() =>{
        console.log('Sayfa Değişti!!', page);
        }, [page, name]);

    return (
    <div className="d-flex justify-content-center my-5 gap-5">
        <button 
        disabled={page === 1}
        onClick={() => setPage(page - 1)} //
        className="btn btn-danger">{'<Geri'}</button>

        <p className="lead">Sayfa:{page}</p>
        
        <button 
        onClick={() => setPage(page + 1)} //
        className="btn btn-primary">{'<ileri'}</button>
        
        <input onChange={(e) => setName(e.target.value)} type="text" />

    </div>
    );
};

export default FunctionComp;