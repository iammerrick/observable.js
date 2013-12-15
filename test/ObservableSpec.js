describe('observable.js', function() {
  var instance;

  beforeEach(function() {
    instance = Observable();
  });

  it('should create a new object', function() {
    expect(instance).toEqual(jasmine.any(Observable));
  });

  it('should register and trigger an event', function() {
    var callback = jasmine.createSpy();
    instance.on('fire', callback);
    instance.trigger('fire');
    expect(callback).toHaveBeenCalled();
  });

  it('should forward the remaining arguments to the listener', function() {
    var callback = jasmine.createSpy();
    instance.on('fire', callback);
    instance.trigger('fire', { hello: 'world' }, 2);
    expect(callback).toHaveBeenCalledWith({ hello: 'world'}, 2);
  });

  it('should register & unregister an event', function() {
    var callback = jasmine.createSpy();
    instance.on('fire', callback);
    instance.off('fire', callback);
    instance.trigger('fire');
    expect(callback.calls.length).toEqual(0);
  });

  it('should unregister all events if the second parameter is omitted', function() {
    var callback = jasmine.createSpy();
    var otherCallback = jasmine.createSpy();
    instance.on('fire', callback);
    instance.on('fire', otherCallback);
    instance.off('fire');
    instance.trigger('fire');
    expect(callback.calls.length).toEqual(0);
    expect(otherCallback.calls.length).toEqual(0);
  });
});
