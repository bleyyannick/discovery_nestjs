import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from 'src/dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    this.messagesService.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param() id: string) {
    this.messagesService.findOne(id);
  }
}
