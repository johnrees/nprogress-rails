jQuery(function() {
  jQuery(document).on('page:fetch',   function() { NProgress.start();  });
  jQuery(document).on('page:receive', function() { NProgress.set(0.7); });
  jQuery(document).on('page:change',  function() { NProgress.done();   });
  jQuery(document).on('page:restore', function() { NProgress.remove(); });

  jQuery(document).on('turbograft:remote:start',   function() { NProgress.start();  });
  jQuery(document).on('turbograft:remote:always', function() { NProgress.set(0.7); });
  jQuery(document).on('turbograft:remote:success',  function() { NProgress.done();   });
  jQuery(document).on('turbograft:remote:success', function() { NProgress.remove(); });
});
