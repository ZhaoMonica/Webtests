from django.shortcuts import render, HttpResponse

# Create your views here.

from firstapp.models import People,Article
from django.template import Context,Template
def first_try(request):
	person = People(name = 'Zhaoxiaoli',job='teacher')
	html_string = '''

		<!DOCTYPE html>
		<html>
			<head>
				<title>demo</title>
				<link rel="stylesheet" type="text/css" href="http://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css">
			</head>
			<body>
				<h1 class="ui center aligned icon header">
					<i class="comments icon"></i>
					hello,{{person.name}}
				</h1>
			</body>
		</html>


	'''
	# 创建模版
	t = Template(html_string)
	#传递给模版的变量是特殊的Python字典，称为上下文(Context)
	c =Context({'person':person})

	# render() 将给定的模版与给定的上下文字典组合起来，
	# 并返回带有该呈现文本的HttpResponse对象
	web_page = t.render(c)

	# 返回 HttpResponse对象 需要引入HttpResponse

	return HttpResponse(web_page)




#创建一个index方法

def index(request):

	context = {}
	#获取Article数据库中的所有对象，并放入字典容器中
	article_list = Article.objects.all()
	context['article_list'] = article_list
	#将模版与变量进行结合
	index_page = render(request,'first_web.html',context)
	return index_page 