
  describe("test", function() {

    describe("raises x to power 3", function() {
        // Mocha 通常会等待测试用例运行 2 秒，之后才去判决它们出错了
      this.timeout(20000); // 这里设置此时长为 200,000 毫秒

      before(() => alert("Testing started – before all tests"));
      after(() => alert("Testing finished – after all tests"));
  
      beforeEach(() => alert("Before a test – enter a test"));
      afterEach(() => alert("After a test – exit a test"));
  
      function makeTest(x) {
        let expected = x * x * x;
        it(`${x} in the power 3 is ${expected}`, function() {
          assert.equal(pow(x, 3), expected);
        });
      }
  
      for (let x = 1; x <= 5; x++) {
        makeTest(x);
      }
  
    });

    it("if n is negative, the result is NaN", function() {
        assert.isNaN(pow(2, -1));
      });
    
      it("if n is not integer, the result is NaN", function() {
        assert.isNaN(pow(2, 1.5));
      });
    // ……可以在这里写更多的测试代码，describe 和 it 都可以添加在这。
  });