// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package service

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/akeyz/console/models"
)

// RestartServiceNoContentCode is the HTTP code returned for type RestartServiceNoContent
const RestartServiceNoContentCode int = 204

/*RestartServiceNoContent A successful response.

swagger:response restartServiceNoContent
*/
type RestartServiceNoContent struct {
}

// NewRestartServiceNoContent creates RestartServiceNoContent with default headers values
func NewRestartServiceNoContent() *RestartServiceNoContent {

	return &RestartServiceNoContent{}
}

// WriteResponse to the client
func (o *RestartServiceNoContent) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(204)
}

/*RestartServiceDefault Generic error response.

swagger:response restartServiceDefault
*/
type RestartServiceDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewRestartServiceDefault creates RestartServiceDefault with default headers values
func NewRestartServiceDefault(code int) *RestartServiceDefault {
	if code <= 0 {
		code = 500
	}

	return &RestartServiceDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the restart service default response
func (o *RestartServiceDefault) WithStatusCode(code int) *RestartServiceDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the restart service default response
func (o *RestartServiceDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the restart service default response
func (o *RestartServiceDefault) WithPayload(payload *models.Error) *RestartServiceDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the restart service default response
func (o *RestartServiceDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *RestartServiceDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
