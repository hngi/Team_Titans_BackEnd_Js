/**
 * @api {get} /api/v1/balance
 * @apiName getAccountBalance
 * @apiGroup SMS Account Balance
 *
 * @apiParam {null} none endpoint call does not require any param.
 *
 * @apiSuccess {JSON} message Your current account balance is (balance) in (currency)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Your current account balance is 748 in dollars",
 *     }
 *
 * @apiError ErrorOccured An error occured while processing your request.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "An error occured while processing your reques"
 *     }
 */


/**
 * @api {POST} /api/v1/send single
 * @apiName sendSms
 * @apiGroup SEND SMS
 * @apiDescription Sends SMS to the phone number specied in the request body
 *
 * @apiParam {string} message Expects 'message' key in the request body.
 * @apiParam {string} mobile_num Expects 'mobile_num' key in the request body.
 *
 * @apiSuccess {string} message Your Message has been succesfully sent and saved
 * @apiSuccess {string} message_id message ID
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Your Message has been succesfully sent and saved",
 *     }
 *
 * @apiError ErrorOccured An error occured while processing your request.
 *
 * @apiErrorExample PRECONDITION_FAILED:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "message field is empty"
 *     }
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "mobile_num field is empty"
 *     }

 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 No Response
 *     {
 *       "error": "error in sending message"
 *     }
 */

 /**
 * @api {POST} /api/v1/send multiple
 * @apiName sendMultiple
 * @apiGroup SEND SMS
 * @apiDescription Sends SMS to multiple phone number(comma delimited list) specied in the request body
 *
 * @apiParam {string} message Expects 'message' key in the request body.
 * @apiParam {string} mobile_nums Expects mobile_nums(comma delimited list) key in the request body.
 *
 * @apiSuccess {string} message Your Messages has been succesfully sent and saved
 * @apiSuccess {string} message_id message ID
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Your Messages has been succesfully sent and saved",
 *     }
 *
 * @apiError ErrorOccured An error occured while processing your request.
 *
 * @apiErrorExample PRECONDITION_FAILED:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "message field is empty"
 *     }
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "mobile_num field is empty"
 *     }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 No Response
 *     {
 *       "error": "error in sending message"
 *     }
 */

 /**
 * @api {get} api/v1/all Outbox
 * @apiName getAllSms
 * @apiGroup SMS Records
 * @apiDescription Retrieves all outbound messages saved locally
 *
 * @apiParam {null} none endpoint call does not require any param.
 *
 * @apiSuccess {String} id message ID.
 * @apiSuccess {String} body  Message content.
 * @apiSuccess {String} to  recipeint.
 * @apiSuccess {String} dateSent  CreatedAt.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "56edesd54643434ece",
 *       "to": "+2348",
 *       "body": "Message Content",
 *       "dateSent": "+2020/6/11"
 *     }
 *
 */

  /**
 * @api {get} api/v1/sms_history Sent
 * @apiName smsHistory
 * @apiGroup SMS Records
 * @apiDescription Retrieves all sent messages with delivery status
 *
 * @apiParam {null} none endpoint call does not require any param.
 *
 * @apiSuccess {String} id message ID.
 * @apiSuccess {String} body  Message content.
 * @apiSuccess {String} to  reciepient.
 * @apiSuccess {String} dateSent  CreatedAt.
 * @apiSuccess {String} dateUpdated  DeliveredOn.
 * @apiSuccess {String} status  Delivery Status.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "56edesd54643434ece",
 *       "to": "+2348",
 *       "body": "Message Content",
 *       "dateSent": "+2020/6/11"
 *       "dateUpdated": "+2020/6/11"
 *       "status": "Delivered"
 *     }
 *
 */