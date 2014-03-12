
NotImplementedError = require '../lib/not_implemented_error'

describe 'NotImplementedError', ->

  it 'should set message', ->
    expect(NotImplementedError('hello').message).toBe('hello should be implemented by an inheriting resource')

  it 'should have correct name', ->
    expect(NotImplementedError().name).toBe('NotImplementedError')

  it 'should capture stack trace', ->
    try
      throw NotImplementedError()
    catch e
      expect(e.stack).not.toBeUndefined()
    