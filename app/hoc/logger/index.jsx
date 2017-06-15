import React,{ Component } from 'react';

export default function MethodLogger(IncludeArguments){
  return (target, key, descriptor) => {
    const msg = 'Called Method';
    const name = target.constructor.name;
    const func = descriptor.value;
    descriptor.value = function ( ...args )
    {
      if(IncludeArguments){
        console.log( `${name}#${key} Called with Args: ${args}` );
      }else{
        console.log( `${name}#${key} Called` );
      }
      return func.apply( this, args );
    };
    return descriptor;
  };
}
