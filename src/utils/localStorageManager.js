const dbName = 'employee';

export const readLocalStorage = () => {
  const prevData = localStorage.getItem( dbName );
  if ( prevData ) return [...JSON.parse( prevData )];
  return [];
};

export const saveToLocalStorage = ( data ) => {
  let newData = []
  const prevData = localStorage.getItem( dbName )
  if ( prevData ) newData.push( ...JSON.parse( prevData ) );
  newData.push(data)
  return localStorage.setItem( dbName, JSON.stringify(newData) )
};

 export const getScheduleFromLocalStorage = (id) => {
   const prevData = localStorage.getItem( dbName );
   if ( prevData ) {
     const parsedData = [ ...JSON.parse( prevData ) ];
     const foundData = parsedData.filter( data => data.id === id )
     if (foundData && foundData.length > 0) return foundData[0]
   }
   return false;
 }

 export const upDateScheduleInLocalStorage = (record) => {
   const prevData = localStorage.getItem( dbName );
   if ( prevData ) {
     const parsedData = [ ...JSON.parse( prevData ) ];
     const oldData = parsedData.filter( data => data.id !== record?.id )
     return localStorage.setItem( dbName,  JSON.stringify([...oldData, record]))
   }
   return false;
 }

 export const deleteScheduleInLocalStorage = (id) => {
   const prevData = localStorage.getItem( dbName );
   if ( prevData ) {
     const parsedData = [ ...JSON.parse( prevData ) ];
     const oldData = parsedData.filter( data => data.id !== id )
     return localStorage.setItem(dbName,JSON.stringify([...oldData]))
   }
   return false;
 }