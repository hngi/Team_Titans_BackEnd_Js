/**
 * @api {get} /v1/balance
 * @apiName getAccountBalance
 * @apiGroup SMS Account Balance
 *
 * @apiParam {string} authorization_token JSON WEB Token signed payload which contains: company_id, account_id,
 * PS: The payload should be signed with a predefined secret_key stored in the config settings
 * PS: The authorization_token is to be included in the request header
 *
 * @apiSuccess {JSON} message Your current account balance is (balance) in (currency)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Your current account balance is 748 in dollars",
 *     }
 *
 * @apiError AuthError Invalid authentication token.
 * @apiError ErrorOccured An error occured while processing your request.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "An error occured while processing your reques"
 *     }
 */


/**
 * @api {POST} /v1/send single
 * @apiName sendSms
 * @apiGroup SEND SMS
 * @apiDescription Sends SMS to the phone number specied in the request body
 *
 * @apiParam {string} message -body || Expects 'message' key in the request body.
 * @apiParam {string} mobile_num -body || Expects 'mobile_num' key in the request body.
 * @apiParam {string} authorization_token -header || JSON WEB Token signed payload which contains: company_id, account_id.
 * The payload should be signed with a predefined secret_key stored in the config settings
 *  
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
 * @apiError AuthError Invalid authentication token.
 * @apiError ErrorOccured An error occured while processing your request.
 *
 * @apiErrorExample authError:
 *     HTTP/1.1 401 No Response
 *     {
 *       "error": "Invalid authentication token"
 *     }
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
 * @api {POST} /v1/send_multiple send multiple
 * @apiName sendMultiple
 * @apiGroup SEND SMS
 * @apiDescription Sends SMS to multiple phone number(comma delimited list) specied in the request body
 *
 * @apiParam {string} message -body || Expects 'message' key in the request body.
 * @apiParam {string} mobile_nums -body || Expects mobile_nums(comma delimited list) key in the request body.
 * @apiParam {string} authorization_token -header || JSON WEB Token signed payload which contains: company_id, account_id.
 * The payload should be signed with a predefined secret_key stored in the config settings
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
 * @apiError AuthError Invalid authentication token.
 * @apiError ErrorOccured An error occured while processing your request.
 *
 * @apiErrorExample authError:
 *     HTTP/1.1 401 No Response
 *     {
 *       "error": "Invalid authentication token"
 *     }
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
 * @api {get} /v1/all Outbox
 * @apiName getAllSms
 * @apiGroup SMS Records
 * @apiDescription Retrieves all outbound messages saved locally
 *
 * @apiParam {string} authorization_token -header || JSON WEB Token signed payload which contains: company_id, account_id.
 * The payload should be signed with a predefined secret_key stored in the config settings
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
 * @apiError AuthError Invalid authentication token.
 * @apiError ErrorOccured An error occured while processing your request.
 *
 * @apiErrorExample authError:
 *     HTTP/1.1 401 No Response
 *     {
 *       "error": "Invalid authentication token"
 *     }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 No Response
 *     {
 *       "error": "error in sending message"
 *     }
 */

  /**
 * @api {get} /v1/sms_history Sent
 * @apiName smsHistory
 * @apiGroup SMS Records
 * @apiDescription Retrieves all sent messages with delivery status
 *
 * @apiParam {string} authorization_token -header || JSON WEB Token signed payload which contains: company_id, account_id.
 * The payload should be signed with a predefined secret_key stored in the config settings
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
 * @apiError AuthError Invalid authentication token.
 * @apiError ErrorOccured An error occured while processing your request.
 *
 * @apiErrorExample authError:
 *     HTTP/1.1 401 No Response
 *     {
 *       "error": "Invalid authentication token"
 *     }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 No Response
 *     {
 *       "error": "error in sending message"
 *     }
 */