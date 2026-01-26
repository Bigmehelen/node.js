class EmailSenderDto {
    constructor(to, subject, text, html, attachment) {
        this.to = to;
        this.subject = subject;
        this.text = text;
        this.html = html;
        this.attachment = attachment;
    }

    static create(to, subject, text, html, attachment) {
        return new EmailSenderDto(to, subject, text, html, attachment);
    }
}

export default EmailSenderDto;