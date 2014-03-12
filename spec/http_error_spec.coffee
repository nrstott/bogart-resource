HttpError = require '../lib/http_error'

describe 'HttpError', ->

  it 'should set status', ->
    expect(HttpError(404).status).toBe(404)

  it 'should set message', ->
    expect(HttpError(404, 'hello').message).toBe('hello')

  it 'should have correct name', ->
    expect(HttpError().name).toBe('HttpError')

  it 'should capture stack trace', ->
    try
      throw HttpError(404, 'hello')
    catch e
      expect(e.stack).not.toBeUndefined()
    
