class Usuario {
	constructor(usuario,clave){
		this._usuario = usuario;
		this._clave = clave;
	}

	get usuario(){
		return this._usuario;
	}

	set usuario(usuarioNuevo){
		this._usuario = usuarioNuevo;
	}

	get clave(){
		return this._clave;
	}

	set clave(claveNueva){
		this._clave = claveNueva
	}
}