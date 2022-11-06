const {
    Op,
    fn
} = require('sequelize');

/**
 * 게시판 컨트롤러
 * @class IntranetConnectionController
 * @property {{[key:string]:any}} envConfig
 * @property sequelize
 * @property models
 * */
class BoardController {
    /**
     * 생성자
     * */
    constructor() {
        /**
         * Router에서 클래스 인스턴스 매서드를 호출시
         * 매서드 내부의 this참조를 Express router를 참조하는 관계로 생성자에서
         * 모든 property의 this를 현재 클래스 인스턴스로 bind하기 위함
         * */
        Object.getOwnPropertyNames(BoardController.prototype).filter(propertyName => propertyName !== 'constructor' && typeof this[propertyName] === 'function').forEach(method => {
            this[method] = this[method].bind(this);
        });
    }

    /**
     * 게시판 조회
     * */
    async getBoardList(req, res) {
        try {
            const boardList = await this.models.Board.findAll({
                attributes: {
                    exclude: ['updated_at', 'deleted_at']
                },
                raw: true
            });
            res.send({
                code: 'success',
                message: '성공했습니다.',
                data: boardList
            });
        } catch (e) {
            console.log(e);
            res.send({
                code: 'fail',
                message: '실패 했습니다.'
            });
        }
    }

    /**
     * 게시글 등록
     * */
    async postBoardOne(req, res) {
        try {
            res.send({
                code: 'success',
                message: '성공했습니다.',
            });
        } catch (e) {
            console.log(e);
            res.send({
                code: 'fail',
                message: '실패 했습니다.'
            });
        }
    }

    /**
     * 게시글 수정
     * */
    async putBoardOne(req, res) {
        try {
            res.send({
                code: 'success',
                message: '성공했습니다.',
            });
        } catch (e) {
            console.log(e);
            res.send({
                code: 'fail',
                message: '실패 했습니다.'
            });
        }
    }

    /**
     * 게시글 삭제
     * */
    async deleteBoardOne(req, res) {
        try {
            res.send({
                code: 'success',
                message: '성공했습니다.',
            });
        } catch (e) {
            console.log(e);
            res.send({
                code: 'fail',
                message: '실패 했습니다.'
            });
        }
    }
}
module.exports = BoardController;