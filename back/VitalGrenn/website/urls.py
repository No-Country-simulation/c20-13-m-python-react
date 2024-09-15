from rest_framework import routers
from website.views import PersonasView,DireccionView, ProductosView, PersonalInfoView, HorariosView
from django.urls import path, include


router = routers.DefaultRouter()
router.register(r'Persona', PersonasView)
router.register(r"productos", ProductosView)
router.register(r"horarios", HorariosView)




urlpatterns = [
    path('', include(router.urls)),
    path('direccion/', DireccionView.as_view(), name='direccion'),
    path('personalinfo/',PersonalInfoView.as_view(), name='personalinfo'),

]
